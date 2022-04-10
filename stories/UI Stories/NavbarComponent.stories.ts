// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
/*
 * File: Alerts.stories.ts
 * Project: leveraon-library
 * File Created: Sunday, 14th February 2021 1:41:15 pm
 * Author: Yu Sang (software-engineering@leveraon.com)
 * -----
 * Last Modified: Sunday, 14th February 2021 1:45:15 pm
 * Modified By: Yu Sang (software-engineering@leveraon.com>)
 * -----
 * Copyright 2015 - 2021 Leveraon Inc
 */
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { NavbarComponent } from 'projects/ui/src/public-api';

export default {
    title: 'UI/Navbar Component',
    excludeStories: /.*Data$/,
    decorators: [
        moduleMetadata({
            imports: [
                RouterTestingModule.withRoutes([]),
                BrowserAnimationsModule,
            ],
        })
    ]
};

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
    component: NavbarComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {

};