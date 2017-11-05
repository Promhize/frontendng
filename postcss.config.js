const autoprefixer = require('autoprefixer')
const postcssalias = require('postcss-alias')
const customselector = require('postcss-custom-selectors')
const colorfunction = require('postcss-color-function')
const mediavariables = require('postcss-media-variables')
const customMedia = require('postcss-custom-media')
const inlinemedia = require('postcss-inline-media')
const packmedia = require('css-mqpacker')
const simplevariables = require('postcss-simple-vars')
const mixins = require('postcss-mixins')
const responsiveType = require('postcss-responsive-type')
const rucksack = require('rucksack-css')
const easyImport = require('postcss-easy-import')
const packMedia = require('css-mqpacker')
const clean = require('postcss-clean')

module.exports = {
  plugins: [
    // atImport,
    easyImport,
    // postcssalias,
    // customselector,
    // mediavariables,
    // customMedia,
    inlinemedia,
    // packmedia,
    simplevariables,
    responsiveType,
    // mediavariables,
    autoprefixer,
    packMedia,
    clean,
    // rucksack,
  ],
}
