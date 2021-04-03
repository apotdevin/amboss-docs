import { forwardRef } from 'react';

export const AmbossLogo = forwardRef<any, any>(
  ({ color = 'currentColor', size = 320, children, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        fill={color}
        viewBox="0 0 640.39 84.938"
        {...rest}
      >
        {children}
        <path d="M218.21 84.937V0h95.657v33.409l-21.548-.257 21.548 18.374v33.41H218.21zm55.329-62.451h-15v10.923h15V22.486zm0 28.784h-15v10.023h15V51.27zM326.622 84.937V0h95.558v84.937h-95.558zM529.307 33.409h-53.35V22.486h55.329L531.187 0H435.63v50.367h55.326v10.926H435.63v23.644h95.557l.045-23.644h-.001l.055-27.884zM638.411 33.409h-53.349V22.486H640.39L640.29 0h-95.558v50.367h55.329v10.926h-55.329v23.644h95.558l.048-23.644h-.002l.054-27.884zM180.049.001l-15.616 17.71-7.498 8.508-7.502-8.509L133.818.001h-24.712v84.937h40.327V44.994l7.502 8.508 7.498-8.506v39.941h40.329V0zM55.329 84.937V61.293h-15v23.644H0V0h95.657v84.937H55.329zm0-56.797h-15v17.092h15V28.14z" />
      </svg>
    );
  }
);

AmbossLogo.displayName = 'AmbossLogo';
