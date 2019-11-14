Pod::Spec.new do |s|
  s.name         = "PasscodeAuth"
  s.version      = "1.0.0"
  s.summary      = "A React Native library for authenticating users with device Passcode"
  s.homepage     = "https://github.com/naoufal/react-native-passcode-auth"
  s.license      = "MIT"

  s.author       = { "Naoufal Kadhom" => "naoufalkadhom@gmail.com" }
  s.platform     = :ios, "9.0"
  s.source       = { :git => "https://github.com/naoufal/react-native-passcode-auth.git" }

  s.source_files  = "*.{h,m}"
  s.dependency "React"
end
