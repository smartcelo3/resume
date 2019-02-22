import { MenuModel } from './menu.model';
import { AboutModel } from './about.model';
import { ExperienceModel } from './experience.model';
import { EducationModel } from './education.model';

export class ContentModel {
    menus: MenuModel[];
    about: AboutModel;
    experience: {
        title: string;
        experiences: ExperienceModel[];
    };
    education : {
        title: string;
        educations: EducationModel[];
    };
    skill: {
        title: string;
        subTitle:string;
        languages: string[];
    };
    interest:{
        title:string;
        description: string;
    };
    award:{
        title:string;
        certifications:string[];
    }
}