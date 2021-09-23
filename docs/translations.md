# Translations

Depending on the type of content, the process of translating parts of the website differs.

## Text in Pages

The process to check and extend the translation of current languages is the following:

1. You need to locate the i18n directory, and go to react-intl subdirectory
2. Once that you are located in i18m/react-intl you will notice that there are several json files (at this moment, en.json, de.json and es.json, where en.json and es.json are functional, and de.json helps as a placeholder for testing purposes)
3. There files present a dictionary with keys and values, where keys will be used all over the different pages on the project.

For instance: 
   If we want to update a text in the entry "people" we locate the file src/pages/people.js:
            title={intl.formatMessage({ id: 'people' })}
   
   In en.json that entry maps to "People", and in es.json to "Personas", the decision about which file will be used for looking up the texts will be based on a dropdown in the component src/components/LanguageSelector.

## Translating Tutorials
As mentioned in the tutorials section, translating a tutorial starts by creating a new copy from index.mdx and renaming it to index.(code_for_language).mdx. Then you can start introducing the text for the translated tutorial.


## Translating Examples
For translating Examples, you need to go to the directory including the desire example ( for instance: examples/Basics/Arrays/Array) and create a new copy of the json file Array.json and renaming that copy to Array.es.json. If you want to localize the pde file the process is exactly the same, duplicate and rename it. The library will be in charge of selecting the proper version every time that you switch language.


## Creating new Translations

1. You need to locate the i18n directory, and open the config.json file. There you must include a new entry for the desired language following the existent structure (particularly the code item, which must be different that the existent ones).
2. Then you need to go the react-intl directory, and make a copy of the en.json, renaming it to match the code provided in the previous step. That is, if in the previous step 1 the code that you will use is xx, then the json file should be named xx.json.
3. Proceed to translate all the entries in the xx.json, without modifying the keys.
4. In case that you forgot to translate some entries, they will fallback to English text.
5. Translating Tutorials and Examples is as described above. Good luck and thanks for your collaboration.


