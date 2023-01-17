enum ValidationsMessagesEnum {
    IS_NOT_EMPTY = 'The $property attribute is required.',
    IS_POSITIVE = 'It must be greater than 0.',
    IS_STRING = 'The $property attribute must be string.',
    IS_BOOLEAN = 'The $property attribute must be Boolean',
    IS_URL = 'The $property field must be url. The url format must be https:/url.com',
    IS_NUMBER = 'The $property attribute must be int',
    IS_DATE = 'The $property attribute must be of type date. The date format must be: yyyy-mm-dd hh:mm:ss',
    NUMBER_MIN = 'The $property field must be greater than or equal to 0 (zero)',
    INT_MAX = 'The $property attribute must not be greater than 2147483647',
    STRING_MAX = 'The $property attribute must be lower than $constraint1',
    IS_BETWEEN_DATES = 'The $property field must be within the range of +- $constraint1 days from the current date and time',
    MAX_LENGTH = 'The maximum length of $property is $constraint1',
    IS_ALPHA = 'The $property attribute can only contain letters.',
    MAX_MIN_LENGTH = 'The length of $property must be between $constraint1 and $constraint2',
    IS_UPPERCASE = 'The $property field must be in uppercase',
  }
  export default ValidationsMessagesEnum;
  