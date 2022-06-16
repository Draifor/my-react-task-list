import { Image } from "@chakra-ui/react";

export default function Icon({ src, alt }) {
  return (
    <>
      <Image alt={alt} src={src} w='35px' />
    </>
  );
}
