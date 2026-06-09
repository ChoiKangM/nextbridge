declare module 'react-qr-code' {
  import { SVGProps } from 'react';

  interface QRCodeProps extends SVGProps<SVGSVGElement> {
    value: string;
    size?: number;
    bgColor?: string;
    fgColor?: string;
    level?: 'L' | 'M' | 'Q' | 'H';
    includeMargin?: boolean;
    imageSettings?: {
      src: string;
      height: number;
      width: number;
      excavate?: boolean;
      x?: number;
      y?: number;
    };
  }

  const QRCode: React.FC<QRCodeProps>;
  export default QRCode;
}
