import React from 'react';
import "tachyons"
import "../index.css"
import {loadButtonStories} from "./button.stories";
import {loadTableStories} from "./Table.stories";
import {loadTableHOCStories} from "./TableHOC.stories";
// import {linkTo} from '@storybook/addon-links';


loadTableHOCStories();
loadButtonStories();
loadTableStories();
