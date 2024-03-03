import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import deskStructure from './deskStructure'
import {schema} from './schemas/schema'
import {Logo} from './src/components/logo'

export default defineConfig({
  name: 'default',
  title: 'founderforgeregg',
  projectId: '00c0but9',
  dataset: 'production',
  plugins: [deskTool({structure: deskStructure}), markdownSchema(), visionTool()],
  schema: {
    types: schema,
  },
  studio: {
    components: {
      logo: () => <Logo />,
    },
  },
})
