import { MenuModel } from './menu.model';
import { AboutModel } from './about.model';
import { ExperienceModel } from './experience.model';

export class ContentModel {
    menus: MenuModel[];
    about: AboutModel;
    experience: {
        title: string;
        experiences: ExperienceModel[];
    }
}