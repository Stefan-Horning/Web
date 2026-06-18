import { Injectable, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export const SITE_URL = 'https://www.swetlana-makeupartist.de';
const SITE_NAME = 'Swetlana Horning – Make-up Artist & Friseurmeisterin';
const DEFAULT_TITLE =
  'Make-up Artist & Friseurmeisterin in Krefeld | Swetlana Horning';
const DEFAULT_DESCRIPTION =
  'Professionelles Make-up, Brautstyling & Hairstyling von Swetlana Horning in Krefeld. Mobiler Service für Hochzeit, Foto, Gala & Events. Jetzt unverbindlich anfragen!';
const DEFAULT_IMAGE = SITE_URL + '/assets/img/Main-picture.webp';

interface SeoData {
  title?: string;
  description?: string;
  robots?: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  /** Aktualisiert Title- und Meta-Tags bei jedem Routenwechsel. */
  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.update(this.deepestRoute().snapshot.data as SeoData));
  }

  private deepestRoute(): ActivatedRoute {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private update(data: SeoData): void {
    const title = data.title ?? DEFAULT_TITLE;
    const description = data.description ?? DEFAULT_DESCRIPTION;
    const robots = data.robots ?? 'index, follow';
    const image = data.image ? SITE_URL + data.image : DEFAULT_IMAGE;
    const path = this.router.url.split('#')[0].split('?')[0];
    const url = SITE_URL + (path === '/' ? '/' : path);

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });

    this.setCanonical(url);

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
    this.meta.updateTag({ property: 'og:locale', content: 'de_DE' });

    // Twitter
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
