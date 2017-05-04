/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <label>Select Boxes</label>
        <div class="form-group">
            <label for="selects_1">This is a select box</label>
            <div class="select">
                <select id="selects_1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>50000000</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="selects_2">Text field paired with a select</label>
            <input type="text" id="selects_2" placeholder="Test">
            <div class="select">
                <select id="selects_3">
                    <option>New York</option>
                    <option>San Francisco</option>
                    <option>Austin</option>
                    <option>Paris</option>
                    <option>Seattle</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="selects_4">Disabled select</label>
            <div class="select disabled">
                <select id="selects_4" disabled>
                    <option>New York</option>
                    <option>San Francisco</option>
                    <option>Austin</option>
                    <option>Paris</option>
                    <option>Seattle</option>
                </select>
            </div>
        </div>
    </section>

    <section class="form-block">
        <label>Multi Select</label>
        <div class="form-group">
            <label for="selects_5">Multi Select</label>
            <div class="select multiple">
                <select id="selects_5" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>50000000</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="selects_6">Disabled select</label>
            <div class="select multiple disabled">
                <select id="selects_6" multiple disabled>
                    <option>New York</option>
                    <option>San Francisco</option>
                    <option>Austin</option>
                    <option>Paris</option>
                    <option>Seattle</option>
                </select>
            </div>
        </div>
    </section>
</form>
`;

@Component({
    selector: "clr-select-types-demo",
    templateUrl: "./select-types.demo.html"
})
export class SelectTypesDemo {
    example = EXAMPLE;
}
