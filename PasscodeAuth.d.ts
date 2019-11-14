declare module 'react-native-passcode-auth' {

  class PasscodeError {
    name: 'LAErrorAuthenticationFailed' | 'LAErrorUserCancel' | 'LAErrorUserFallback' | 'LAErrorSystemCancel'
      | 'LAErrorPasscodeNotSet' | 'LAErrorTouchIDNotAvailable' | 'LAErrorTouchIDNotEnrolled'
      | 'LAErrorTouchIDNotEnrolled' | 'RCTTouchIDUnknownError' | 'RCTTouchIDNotSupported';
    message: string;
    details: any;
  }

  export const isSupported: () => Promise<boolean | string | PasscodeError>;
  export const authenticate: (reason: string) => Promise<boolean | PasscodeError>;
}
