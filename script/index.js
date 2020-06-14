const path = require('path')
const fs = require('fs-extra')
const babylon = require('babylon')
const traverse = require('@babel/traverse').default
const genetator = require('@babel/generator').default

const target_path = path.resolve(__dirname, '../src/index.js')
const code = fs.readFileSync(target_path, { encoding: 'utf8' })

const ast = babylon.parse(code, {
  sourceType: 'module'
})


traverse(ast, {
  enter (path) {
    if (path.isObjectPattern()) {
      console.log(path.node)
      path.node.name = 'A'
    }
  }
})

const str = genetator(ast, { keepLines: true }, code).code
fs.writeFileSync(target_path, str)
