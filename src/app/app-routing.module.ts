import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';

import { WebsiteDevelopmentComponent } from './components/services/website-development/website-development.component';
import { BulkSmsComponent } from './components/services/bulk-sms/bulk-sms.component';
import { DomainHostingComponent } from './components/services/domain-hosting/domain-hosting.component';
import { GraphicsLogoDesignComponent } from './components/services/graphics-logo-design/graphics-logo-design.component';
import { SeoOnlinePromotionComponent } from './components/services/seo-online-promotion/seo-online-promotion.component';
import { MobileAppsDevelopmentComponent } from './components/services/mobile-apps-development/mobile-apps-development.component';
import { SoftwareDevelopmentComponent } from './components/services/software-development/software-development.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "career",
    component: CareerComponent
  },
  {
    path: "get-a-quote",
    component: GetQuoteComponent
  },
  {
    path: "service",
    children: [
      {
        path: "website-development",
        component: WebsiteDevelopmentComponent
      },
      {
        path: "software-development",
        component: SoftwareDevelopmentComponent
      },
      {
        path: "mobile-apps-development",
        component: MobileAppsDevelopmentComponent
      },
      {
        path: "seo-online-promotion",
        component: SeoOnlinePromotionComponent
      },
      {
        path: "graphics-logo-design",
        component: GraphicsLogoDesignComponent
      },
      {
        path: "domain-hosting",
        component: DomainHostingComponent
      },
      {
        path: "bulk-sms",
        component: BulkSmsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
