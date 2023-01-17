enum DataTypeValidationEnum {
    MIN_STRING = 1,
    MAX_STRING = 250,
    MAX_STRING_100 = 100,
    MAX_STRING_50 = 50,
    MIN_DATE = 19,
    MAX_DATE = 19,
    MIN_NUMBER = 0,
    MAX_NUMBER = 2147483647,
    PASSWORD_REGEX = '/^[a-zA-Z0-9!@#$%^&*]$/',
    MAX_PASSWORD = 16,
    MIN_PASSWORD = 8,
    LOCALE_ES = 'es-ES',
    MIN_ACRONYM = 3,
    MAX_ACRONYM = 3,
    MIN_DOMAIN = 2,
    MAX_DOMAIN = 2,
  }
  
  export default DataTypeValidationEnum;
  