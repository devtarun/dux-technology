import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CareerComponent } from './components/career/career.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GetQuoteComponent } from './components/get-quote/get-quote.component';
import { WebsiteDevelopmentComponent } from './components/services/website-development/website-development.component';
import { SoftwareDevelopmentComponent } from './components/services/software-development/software-development.component';
import { MobileAppsDevelopmentComponent } from './components/services/mobile-apps-development/mobile-apps-development.component';
import { SeoOnlinePromotionComponent } from './components/services/seo-online-promotion/seo-online-promotion.component';
import { GraphicsLogoDesignComponent } from './components/services/graphics-logo-design/graphics-logo-design.component';
import { DomainHostingComponent } from './components/services/domain-hosting/domain-hosting.component';
import { BulkSmsComponent } from './components/services/bulk-sms/bulk-sms.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    CareerComponent,
    ContactUsComponent,
    GetQuoteComponent,
    WebsiteDevelopmentComponent,
    SoftwareDevelopmentComponent,
    MobileAppsDevelopmentComponent,
    SeoOnlinePromotionComponent,
    GraphicsLogoDesignComponent,
    DomainHostingComponent,
    BulkSmsComponent,
    QuoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
