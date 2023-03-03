import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from "./structure";
import { myTheme } from "./theme";
const projectId= process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset= process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath:"/studio",
  name: 'SRINIVAS_CONTENT_STUDIO',
  title: 'SRINIVAS CONTENT STUDIO',

  projectId: '7bn0iodj',
  dataset: 'production',

  plugins: [deskTool({ defaultDocumentNode: getDefaultDocumentNode,}), visionTool()],

  schema: {
    types: schemaTypes,
  },
  icon:Logo,
  logo:Logo,
  studio:{
    components:{
      logo:Logo,
      navbar:StudioNavbar
    }
  },
  theme: myTheme,
})
