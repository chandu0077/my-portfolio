"use client";
import { Textarea, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    console.log("form current", form.current);

    emailjs
      .sendForm("service_hsk2aar", "template_h55w2sk", form.current, {
        publicKey: "Bk1P2oUyvV3gRcy4U",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormControl p="10">
        <Flex gap="4" direction={{ base: "column", md: "row" }}>
          <Input
            type="text"
            border="0"
            borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
            name="user_name"
            placeholder="Name"
            _focusVisible={{
              border: "0 0 1px 0",
            }}
          />
          <Input
            type="email"
            placeholder="E-Mail"
            name="user_email"
            border="0"
            borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
            _focusVisible={{
              border: "0 0 1px 0",
            }}
          />
        </Flex>
        <Input
          mt="12"
          type="text"
          name="subject"
          placeholder="Subject"
          border="0"
          borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
          _focusVisible={{
            border: "0 0 1px 0",
          }}
        />
        <Textarea
          mt="12"
          border={0}
          name="message"
          borderBottom={"1px dashed rgba(0, 0, 0, 0.2)"}
          placeholder="Message"
          size="sm"
          _focusVisible={{
            border: "0 0 1px 0",
          }}
        />

        <Button
          bgColor="black"
          color="white"
          borderRadius={"full"}
          mt="2"
          fontWeight={"normal"}
          px="8"
          py="6"
          fontSize={{ base: "md", xl: "md" }}
          type="submit"
        >
          Send Message
        </Button>
      </FormControl>
    </form>
  );
}
