import translates from './langs'

const useIntl = (props = { lang: 'en' }) => {
  const { lang } = props,
    intls = translates[lang],
    val = (key: string, values: []): string => {
      const valsToReplace = key.match(/\{\$(.*?)\}/)

      key = key in intls ? intls[key] : key

      if(values.length && valsToReplace?.length) {
        valsToReplace?.map((item, index) => {
          const num = parseInt(item),
            valNum = num - 1

          if(index > 0 && index < valsToReplace.length) {
            key = key.replace(`{$${num}}`, values[valNum])
          }
  
          return item
        })
      }

      return key
    }

  return val
}

export { useIntl }
