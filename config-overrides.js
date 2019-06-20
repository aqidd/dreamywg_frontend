const {
     override,
     addDecoratorsLegacy,
     disableEsLint
} = require("customize-cra")

module.exports = {
     webpack: override(
          // usual webpack plugin
          disableEsLint(),
          addDecoratorsLegacy()
     )
}
