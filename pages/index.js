import { Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function index() {
  return (
    <Flex
      h={"100vh"}
      w={"100%"}
      flexDir={"column"}
      align={["center", "start", "start"]}
    >
      <motion.div
        initial={{ opacity: "0" }}
        animate={{ opacity: "100%" }}
        transition={{ delay: "0.15" }}
      >
        <Flex
          w={["300px", "300px", "555px"]}
          gap={"20px"}
          flexDir={"column"}
          marginTop={"40px"}
          marginLeft={["0px", "0px", "40px"]}
        >
          <Flex w={["300px", "300px", "555px"]} gap={"14px"} align={"center"}>
            <Image
              alt={"pakhi"}
              src={"pakhi.png"}
              w={"40px"}
              h={"40px"}
              rounded={"full"}
            />
            <Text fontSize={["14px", "14px", "18px"]}>
              heyy! i&apos;m pakhi — 19yo undergrad econ + cs student.
            </Text>
          </Flex>
          <Text fontSize={["14px", "14px", "18px"]}>
            i recently fell in deep love with engg and design. since then,
            i&apos;ve been exploring and crafting the craft. currently helping
            my bestie build a{" "}
            <a
              href={"https://notlinear.xyz"}
              target={"_blank"}
              rel="noreferrer"
              style={{ color: "#005B99" }}
            >
              virtual lab
            </a>{" "}
            on the side 👾
          </Text>
          <Text fontSize={["14px", "14px", "18px"]}>
            wanna talk about random ideas, work on cool things maybe or just
            vibe? find me on twitter on{" "}
            <a
              href={"https://twitter.com/0xpakhi"}
              target={"_blank"}
              rel="noreferrer"
              style={{ color: "#005B99" }}
            >
              twitter
            </a>{" "}
            :)
          </Text>
          <Flex
            marginTop={"20px"}
            h={["165px", "165px", "200px"]}
            w={["165px", "165px", "200px"]}
          >
            <video loop autoPlay muted>
              <source src="diffusion.mp4" type="video/mp4" />
            </video>
          </Flex>
        </Flex>
      </motion.div>
    </Flex>
  );
}
