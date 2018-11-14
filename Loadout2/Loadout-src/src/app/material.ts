import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatMenuModule, MatMenu } from "@angular/material/menu";

import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, BrowserAnimationsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, BrowserAnimationsModule],
})
export class MaterialModule {}