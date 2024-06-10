import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/path/to/profile-pic.jpg"
            alt="Profile Picture"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Full Stack Developer | Tech Enthusiast | Blogger
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            {posts.map((post, index) => (
              <Box key={index} p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">{post.title}</Heading>
                <Text mt={4}>{post.content}</Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box textAlign="center">
          <Button as={Link} to="/add-post" colorScheme="teal" size="lg" mb={4}>
            Add New Post
          </Button>
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton
              as="a"
              href="https://twitter.com"
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="lg"
              isRound
            />
            <IconButton
              as="a"
              href="https://linkedin.com"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              isRound
            />
            <IconButton
              as="a"
              href="https://github.com"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              isRound
            />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;