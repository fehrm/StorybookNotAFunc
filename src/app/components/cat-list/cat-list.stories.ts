import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { Meta, moduleMetadata } from "@storybook/angular";
import { CatService } from "src/app/services/cat.service";
import { CatListComponent } from "./cat-list.component";

export default {
  component: CatListComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      providers: [CatService]
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <div style="border: 1px solid #000; max-width: 900px;">
      <app-cat-list [nrOfItems]="nrOfItems"></app-cat-list>
    </div>
  `,
  }),
} as Meta;

export const primary = {
};
