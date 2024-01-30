import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard
} from '@chakra-ui/react'
import { SEO } from 'components/seo/seo'
import type { NextPage } from 'next'
import Image from 'next/image'
import * as React from 'react'

import { Br } from '@saas-ui/react'
import { Features } from 'components/features'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { Hero } from 'components/hero'
import { FallInPlace } from 'components/motion/fall-in-place'
import { Em } from 'components/typography'
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiGrid,
  FiSliders,
  FiSmile,
  FiThumbsUp
} from 'react-icons/fi'

import { ButtonLink } from 'components/button-link/button-link'
import { Testimonial, Testimonials } from 'components/testimonials'

import testimonials from 'data/testimonials'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from 'components/highlights'

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Yonode - A Web Server Framework for Node.js"
        description="A Web Server Framework for Node.js"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <TestimonialsSection />
      </Box>
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add yonode')

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Develop Servers 
                <Br /> Efficiently & Rapidly
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                 Yonode is a <Em>Node.js framework</Em>
                <Br /> that streamlines your workflow, enabling you  <Br />{' '}
                to craft efficient server solutions rapidly.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                {/* <NextjsLogo height="28px" /> <ChakraLogo height="20px" /> */}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Learn Yonode
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Accessible',
            icon: FiSmile,
            description: 'All components strictly follow WAI-ARIA standards.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Themable',
            icon: FiSliders,
            description:
              'Fully customize all components to your brand with theme support and style props.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Composable',
            icon: FiGrid,
            description:
              'Compose components to fit your needs and mix them together to create new ones.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Productive',
            icon: FiThumbsUp,
            description:
              'Designed to reduce boilerplate and fully typed, build your product at speed.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add yonode')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                yonode
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
        "We believe in efficiency, and so should you. Yonode is built on top of the most productive and established tools in the field, sparing you from reinventing the wheel."
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Mc Hamouda"
        description="Software Engineer"
        avatar="https://scontent.fmgq1-2.fna.fbcdn.net/v/t39.30808-6/327393903_1656046211506232_8771109005885974511_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Yf31_6qnrP4AX8b-pwN&_nc_ht=scontent.fmgq1-2.fna&oh=00_AfBluOJDIdOQAgESlvyfIY8Mz__n3aDB-j7BzcnF2dbagA&oe=65BDAC95"
        gradient={['pink.200', 'purple.500']}
      >
        "Yonode revolutionized our server setup, granting us more time to concentrate on vital business logic. It drastically reduced development hours, enabling us to establish a modern and efficient server architecture quickly."
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic backend needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'mvc architecture',
            'authentication',
            'router',
            'controller',
            'models',
            'orm support',
            'your desire db',
            'frontend support',
            '.env',
            'documentation',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []]
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

export default Home

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: 'Yonode Elevates Servers!',
//         href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order',
//       },
//     },
//   }
// }
