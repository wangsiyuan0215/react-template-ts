import { language } from './interface';
import zhCn from './zh-cn';
import enUs from './en-us';

declare global {
    interface Window {
        localLanguage: language
    }
}

const languages: language = {
    'zh-cn': zhCn,
    'en-us': enUs
};

const langStringDefault: string = 'zh-cn';
const langString = window.navigator
    && window.navigator.language
    && window.navigator.language.toString().toLowerCase()
    || langStringDefault;

window.localLanguage = languages[langString] || languages['zh-cn'];

