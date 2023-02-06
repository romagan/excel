import {Excel} from '@components/excel/excel'
import {Header} from '@components/header/header'
import {Toolbar} from '@components/toolbar/toolbar'
import {Formula} from '@components/formula/formula'
import {Table} from '@components/table/table'

import '/scss/index.scss'

const app = new Excel(`#app`, {
  components: [Header, Toolbar, Formula, Table]
})

app.render()
