import es from './es.json';
import en from './en.json';

const lang = (code: keyof typeof es) => (navigator.language == 'es-ES' ? es : en)[code];

export default lang;
