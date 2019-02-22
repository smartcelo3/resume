import { ContentModel } from '../models/content.model';

export class ContentService{
    content_pt_br : ContentModel = {
       menus : [
        {
          url:'#about',
          name: 'Sobre'
        },
        {
          url:'#experience',
          name: 'Experiência'
        },
        {
          url:'#education',
          name: 'Educação'
        },
        {
          url:'#skills',
          name: 'Habilidades'
        },
        {
          url:'#interests',
          name: 'Interesses'
        },
        {
          url:'#awards',
          name: 'Certificações'
        },
      ],
        about : {
            firstName: 'Marcelo',
            lastName: 'Queiroz',
            city: 'Campo Grande',
            uf: 'MS',
            coutry : 'Brasil',
            cel: '(67) 99242-2442',
            email: 'smartcelo3@hotmail.com',
            description: "Sou um desenvolvedor de software para web com mais de 8 anos de experiência, desenvolvendo aplicações web para educação. Tenho Bacharelado em Ciência da Computação e trabalho com as tecnologias C#, SQL, JavaScript, AngularJs e Angular. Sou um intusiasta com capacidade comprovada para alavancar várias tecnologias para construir aplicativos interativos e inovadores"
        },
        experience : {
          title: 'Experiência',
          experiences: [
            {
              title: 'Desenvolvedor Front-End e Back-End',
              company: 'Miltec Tecnologia da Informação',
              workDescription: 'Trabalhando com desenvolvimento de aplicações para ajuda da edução.',
              start: 'Jul 2016',
              end: 'Presente'
            },
            {
              title: 'Desenvolvedor Front-End e Back-End',
              company: 'SGI - Superintendência de Gestão da Informação - MS',
              workDescription: 'Trabalhando no desenvolvimento de aplicações web para ajudar as tarefas dos professores tais como: Planejamento de Aula e Diário de Classe.',
              start: 'Mar 2015',
              end: 'Jun 2016'
            },
            {
              title: 'Desenvolvedor Front-End e Back-End',
              company: 'SED - Secretária de Estado de Educação MS',
              workDescription: 'Trabalhando no desenvolvimento de aplicações web para ajudar as tarefas dos professores tais como: Planejamento de Aula e Diário de Classe.',
              start: 'Out 2011',
              end: 'Fev 2015'
            }
          ]
        },
        education :{
          title: 'Educação',
          educations:  [
            {
              company: 'FCG - Faculdade Campo Grande',
              course: 'Bacharel em Ciência da Computação',
              description: 'Ciência da Computação - Desenvolvedor WEB',
              start: 'Jan 2006',
              end: 'Dez 2010'
            }
          ]
        },
        skill:{
          title: 'Habilidades',
          subTitle: 'Linguagens de programação e Ferramentas',
          languages: [
            'html5','css3','js', 'angular','npm'
          ]
        },
        interest:{
          title: 'Interesses',
          description:"Alem de gostar de ser desenvolvedor , gosto de passar o tempo praticando exercícios. Eu gosto de assister series e filmes do genero de ficção ciêntifica e fantasia, e gasto uma boa quantidade do meu tempo livre explorando as mais avançadas tecnologias no mundo do desenvolvimento do front-end."
        },
        award:{
          title: "Certificações",
          certifications: ['Curso de Desenvolvimento WEB com ES6, TypeScript e Angular','Ionic 2/ Ionic 3 - Build iOS & Android Apps with Angular','Git e Github para iniciantes']
        }
    };

    content_en : ContentModel = {
        menus: [
            {
              url:'#about',
              name: 'About'
            },
            {
              url:'#experience',
              name: 'Experience'
            },
            {
              url:'#education',
              name: 'Education'
            },
            {
              url:'#skills',
              name: 'Skills'
            },
            {
              url:'#interests',
              name: 'Interests'
            },
            {
              url:'#awards',
              name: 'Awards'
            },
          ],
        about : {
            firstName: 'Marcelo',
            lastName: 'Queiroz',
            city: 'Campo Grande',
            uf: 'MS',
            coutry : 'Brazil',
            cel: '(67) 99242-2442',
            email: 'smartcelo3@hotmail.com',
            description: "I am a full web Software Developer with over 8 years of experience developing educacional web applications. I have a Bachelor's Degree in Computer Science and work with technologies such as C#, SQL, JavaScript, AngularJs and Angular. I am a self-starter with proven ability to leverage multiple technologies to build interactive and innovative applications."
        },
        experience : {
          title: 'Experience',
          experiences: [
            {
              title: 'Front And Back-End Developer',
              company: 'Miltec Tecnologia da Informação',
              workDescription: 'Working developing web applications to help manage education data.',
              start: 'Jul 2016',
              end: 'Present'
            },
            {
              title: 'Front and back-end developer',
              company: 'SGI - Superintendência de Gestão da Informação - MS',
              workDescription: 'Working developing web applications to help teachers diary tasks such as Class Planning and Class Diary.',
              start: 'Mar 2015',
              end: 'Jun 2016'
            },
            {
              title: 'Front and back-end developer',
              company: 'SED - Secretária de Estado de Educação MS',
              workDescription: 'Working developing web applications to help teachers diary tasks such as Class Planning and Class Diary.',
              start: 'Oct 2011',
              end: 'Feb 2015'
            }
          ]
        },
        education :{
          title: 'Education',
          educations:  [
            {
              company: 'FCG - Faculdade Campo Grande',
              course: 'Bachelor of Computer Science',
              description: 'Computer Science - Web Developer',
              start: 'Jan 2006',
              end: 'Dec 2010'
            }
          ]
        },
        skill:{
          title: 'Skills',
          subTitle: 'Programming Languages & Tools',
          languages: [
            'html5','css3','js', 'angular','npm'
          ]
        },
        interest:{
          title: 'Interests',
          description:"Apart from being a web developer, I enjoy most of my time being outdoors. When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
        },
        award:{
          title: "Awarde & Certifications",
          certifications: ['Curso de Desenvolvimento WEB com ES6, TypeScript e Angular','Ionic 2/ Ionic 3 - Build iOS & Android Apps with Angular','Git e Github para iniciantes']
        }
    };

    getContent(language: string){
        if(language === 'pt-br')
            return this.content_pt_br;
        else
            return this.content_en;
    }
}