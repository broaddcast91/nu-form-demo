import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Hero from 'components/hero/TwoColumnWithVideo.js';
import Features from 'components/features/ThreeColSimple.js';
import MainFeature from 'components/features/TwoColWithButton.js';
import MainFeature2 from 'components/features/TwoColSingleFeatureWithStats2.js';
import TabGrid from 'components/cards/TabCardGrid.js';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage.js';
import DownloadApp from 'components/cta/DownloadApp.js';
import Footer from 'components/footers/FiveColumnWithInputForm.js';
import Slider from "./components/slider/Slider"
import chefIconImageSrc from 'images/chef-icon.svg';
import celebrationIconImageSrc from 'images/celebration-icon.svg';
import shopIconImageSrc from 'images/shop-icon.svg';
import FAQ from 'components/faq/FAQ';
import SimpleWithSideImage from 'components/faqs/SimpleWithSideImage';

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
  
    <AnimationRevealPage>
     
      <Hero
        heading={
          <>
            Explore the best selling, safe and natural{' '}
            <HighlightedText>100% toxin free.</HighlightedText>
          </>
        }
        description='Unlock Your Optimal Health with Our Premium Nutrition Tablets - Your Daily Dose of Essential Nutrients!'
        imageSrc='https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/veggies_with_supplements.ashx'
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText='Order Now'
        watchVideoButtonText='Meet The experts'
      />
  
      <MainFeature
        subheading={<Subheading>Established Since 2014</Subheading>}
        heading={
          <>
            We've been serving for
            <wbr /> <HighlightedText>over 5 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Welcome to our premium nutrition tablet website, where we are
            dedicated to helping you achieve your optimal health and wellness
            goals. Our mission is to provide you with the highest quality
            nutrition tablets that are specifically designed to support your
            unique nutritional needs.
            <br></br>
            <br></br> We understand that in today's fast-paced world, it can be
            challenging to get all the nutrients that your body needs from food
            alone. That's where our nutrition tablets come in. They are a
            convenient and easy way to ensure that your body is getting all the
            essential nutrients it needs to function at its best.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText='Latest Offers'
        imageSrc={
          'https://cdn.shopify.com/s/files/1/0072/5208/2776/articles/Screenshot_2022-08-16_at_13.00.04.png?v=1660653176'
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>products.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Benefits.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: 'Essential Nutrients',
            description:
              'Nutrition tablets are designed to provide essential vitamins, minerals, and other nutrients that your body needs to function properly. They can help to ensure that you are getting all the necessary nutrients even if your diet is lacking.',
            url: 'https://google.com',
          },
          {
            imageSrc: chefIconImageSrc,
            title: 'Improved Immune System',
            description:
              'Nutrition tablets can contain immune-boosting ingredients such as vitamin C, zinc, and probiotics that can help to support a healthy immune system. They can help to prevent illness and keep you feeling your best.',
            url: 'https://timerse.com',
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: 'Joint Health',
            description:
              'Some nutrition tablets contain ingredients such as glucosamine and chondroitin that can help to support joint health and reduce inflammation. They can help to promote healthy joints and reduce the risk of joint-related conditions.',
            url: 'https://reddit.com',
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: 'Heart Health',
            description:
              'Some nutrition tablets contain ingredients such as omega-3 fatty acids and CoQ10 that can help to support heart health and reduce the risk of heart disease. They can help to promote healthy cholesterol levels and reduce inflammation.',
            url: 'https://reddit.com',
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: 'Brain Function',
            description:
              'Certain nutrition tablets contain ingredients such as omega-3 fatty acids and B vitamins that can help to support brain function and improve cognitive performance. They can help to improve memory, focus, and overall brain health.',
            url: 'https://reddit.com',
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: 'Improved Energy Levels',
            description:
              ' Many nutrition tablets contain ingredients that can help to boost energy levels and reduce fatigue. They can provide a natural and sustained source of energy to help you stay focused and productive throughout the day.',
            url: 'https://reddit.com',
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: 'Orders',
            value: '94000+',
          },
          {
            key: 'Customers',
            value: '11000+',
          },
          {
            key: 'Chefs',
            value: '1500+',
          },
        ]}
        primaryButtonText='Order Now'
        primaryButtonUrl='https://order.now.com'
        imageInsideDiv={false}
        imageSrc='https://www.theladders.com/wp-content/uploads/vitamins-pills-190716-651x366.jpg'
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
    <div>
      
    </div>
      <Testimonial
        subheading=''
        heading={
          <>
            Customers <HighlightedText>Love Us.</HighlightedText>
          </>
        }
      />
      {/* <DownloadApp
        text={
          <>
            People around you are nutrition supplements using the{' '}
            <HighlightedTextInverse>nuform App.</HighlightedTextInverse>
          </>
        }
      /> */}
      {/* <FAQ /> */}
      <SimpleWithSideImage />
      <Footer />
    </AnimationRevealPage>
  );
};

// import React, { useState, useEffect } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { Rnd } from "react-rnd";
// import { motion } from "framer-motion";
// import { components } from "ComponentRenderer.js";
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { Container, Content2Xl, ContentWithVerticalPadding } from "components/misc/Layouts";
// import tw from "twin.macro";
// import styled from "styled-components";
// import { css } from "styled-components/macro";
// import { LogoLink } from "components/headers/light.js";
// import { SectionHeading as HeadingBase } from "components/misc/Headings";
// import { SectionDescription as DescriptionBase } from "components/misc/Typography";
// import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

// import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
// import { ReactComponent as RadioIcon } from "feather-icons/dist/icons/radio.svg";
// import { ReactComponent as HandleIcon } from "images/handle-icon.svg";
// import { ReactComponent as ArrowRightIcon } from "images/arrow-right-3-icon.svg";

// import heroScreenshotImageSrc from "images/demo/MainLandingPageHero.png";
// import logo from "images/logo.svg";
// import useInView from "helpers/useInView";

// /* Hero */
// const Row = tw.div`flex`;
// const NavRow = tw(Row)`flex flex-col lg:flex-row items-center justify-between`;
// const NavLink = tw.a`mt-4 lg:mt-0 transition duration-300 font-medium pb-1 border-b-2 mr-12 text-gray-700 border-gray-400 hocus:border-gray-700`;
// const PrimaryNavLink = tw(
//   NavLink
// )`text-gray-100 bg-primary-500 px-6 py-3 border-none rounded hocus:bg-primary-900 focus:shadow-outline mt-6 md:mt-4 lg:mt-0`;
// const HeroRow = tw(Row)`flex-col lg:flex-row justify-between items-center pt-8 lg:pt-12 pb-16 max-w-screen-2xl mx-auto flex-wrap`;

// const Column = tw.div`flex-1`;

// const UpdateNotice = tw(Column)`w-full flex-auto mb-4 sm:mb-8 rounded px-4 py-3 sm:px-5 sm:py-4 bg-orange-100 text-orange-800 flex items-center sm:items-start md:items-center justify-center lg:justify-start border border-orange-200 text-xs sm:text-sm text-center sm:text-left md:leading-none`;
// const UpdateNoticeIcon = tw(RadioIcon)`w-0 sm:w-5 sm:mr-3`;

// const TextColumn = tw(Column)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl xl:max-w-2xl flex-shrink-0`;
// const Heading = tw(HeadingBase)`text-center lg:text-left text-primary-900 leading-snug`;
// const Description = tw(
//   DescriptionBase
// )`mt-4 text-center lg:text-left lg:text-base text-gray-700 max-w-lg mx-auto lg:mx-0`;
// const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
// const ActionButton = tw(
//   AnchorLink
// )`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
// const PrimaryButton = tw(ActionButton)``;
// const SecondaryButton = tw(
//   ActionButton
// )`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
// const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
// const Feature = tw.li`mt-2 flex items-center flex-shrink-0 w-full sm:w-1/2 justify-center lg:justify-start`;
// const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
// const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
// const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
// const ImageContainer = tw.div``;
// const Image = tw.img`max-w-full rounded-t sm:rounded`;

// const SectionContainer = tw(ContentWithVerticalPadding)``;
// const SectionHeading = tw(HeadingBase)`text-primary-900`;
// const SectionDescription = tw(DescriptionBase)`text-center mx-auto text-gray-600 max-w-4xl`;

// const PreviewCards = tw.div`flex flex-wrap -mr-12`;
// const PreviewCardContainer = tw.div`mt-24 mx-auto md:mx-0 max-w-lg w-full md:w-1/2 lg:w-1/3 pr-12`;
// const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
// const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
// const PreviewCardImage = styled(motion.div)`
//   ${props => css`background-image: url("${props.$imageSrc}");`}
//   ${tw`h-128 md:h-144 bg-cover bg-left-top`}
// `;
// const PreviewButton = tw(PrimaryButtonBase)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

// const ComponentsContainer = tw.div`mt-24`;
// const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
// const Components = tw.div``;
// const Component = tw.div`mt-12 border rounded-lg bg-white`;
// const ComponentHeading = tw.div`px-8 py-5 border-b flex flex-col sm:flex-row justify-between items-center`;
// const ComponentName = tw.h6`text-lg`;
// const ComponentPreviewLink = tw.a`mt-4 sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-center`;
// const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
// const ResizableBox = styled(Rnd)`
//   ${tw`relative! bg-white pr-4`}
//   .resizeHandleWrapper > div {
//     ${tw`w-4! right-0!`}
//   }
// `;
// const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;

// export default ({
//   features = null,
//   primaryButtonUrl = "#landingPageDemos",
//   primaryButtonText = "Explore Demos",
//   secondaryButtonUrl = "#componentDemos",
//   secondaryButtonText = "View Components",
//   buttonRoundedCss = "",
//   landingPages = components.landingPages,
//   innerPages = components.innerPages,
//   blocks = components.blocks,
//   heading = "Free Modern React Templates for every need.",
//   description = "Easily customizable modern React UI Templates and Components built using TailwindCSS which are also lightweight and simple to setup. All components are modular and fully responsive for great mobile experience as well as big desktop screens.  Brand Colors are also fully customizable. Free for personal as well as commercial use."
// }) => {
//   /*
//    * Using gtag like this because we only want to use Google Analytics when Main Landing Page is rendered
//    * Remove this part and the the gtag script inside public/index.html if you dont need google analytics
//    */
//   useEffect(() => {
//     window.gtag("js", new Date());
//     window.gtag("config", "UA-45799926-9");
//   }, [])

//   const previewImageAnimationVariants = {
//     rest: {
//       backgroundPositionY: "0%"
//     },
//     hover: {
//       backgroundPositionY: "100%",
//       transition: { type: "tween", ease: "linear", duration: 5 }
//     }
//   };

//   const noOfLandingPages = Object.keys(landingPages).length;
//   const noOfInnerPages = Object.keys(innerPages).length;
//   const noOfComponentBlocks = Object.values(blocks).reduce((acc, block) => acc + Object.keys(block.elements).length, 0);

//   features = features || [
//     `${noOfLandingPages} Landing Page Demos`,
//     `${noOfInnerPages} Inner Pages`,
//     `${noOfComponentBlocks} Components`,
//     "Uses TailwindCSS",
//     "Fully Responsive",
//     "Fully Customizable"
//   ];

//   return (
//     <AnimationRevealPage disabled>
//       <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
//         <Content2Xl>
//           <NavRow>
//             <LogoLink href="/">
//               <img src={logo} alt="" />
//               nuform
//             </LogoLink>
//             <div tw="flex flex-wrap justify-center lg:justify-end items-center -mr-12">
//               <NavLink target="_blank" href="https://owaiskhan.me/post/free-tailwindcss-react-ui-kit">
//                 License & Usage
//               </NavLink>
//               <NavLink target="_blank" href="https://owaiskhan.me">
//                 Who Am I ?
//               </NavLink>
//               <NavLink target="_blank" href="https://twitter.com/owaiswiz">
//                 Twitter
//               </NavLink>
//               <NavLink target="_blank" href="mailto:owaiswiz@gmail.com">
//                 Hire Me!
//               </NavLink>
//               <div tw="md:hidden flex-100 h-0"></div>
//               <PrimaryNavLink target="_blank" href="https://gum.co/QaruQ">
//                 Download Now
//               </PrimaryNavLink>
//             </div>
//           </NavRow>
//           <HeroRow>
//             <UpdateNotice>
//               <UpdateNoticeIcon />
//               Last updated on 10th September, 2022 - Added support for React v18 and TailwindCSS v3!
//             </UpdateNotice>
//             <TextColumn>
//               <Heading as="h1">{heading}</Heading>
//               <Description>{description}</Description>
//               <FeatureList>
//                 {features.map((feature, index) => (
//                   <Feature key={index}>
//                     <FeatureIcon />
//                     <FeatureText>{feature}</FeatureText>
//                   </Feature>
//                 ))}
//               </FeatureList>
//               <Actions>
//                 <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
//                   {primaryButtonText}
//                 </PrimaryButton>
//                 <SecondaryButton href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
//               </Actions>
//             </TextColumn>
//             <ImageColumn>
//               <ImageContainer>
//                 <Image src={heroScreenshotImageSrc} />
//               </ImageContainer>
//             </ImageColumn>
//           </HeroRow>
//           <SectionContainer id="landingPageDemos">
//             <SectionHeading>Landing Pages</SectionHeading>
//             <SectionDescription>
//               We have {noOfLandingPages} premade landing pages. Click on the "View Live Demo" button to see them in
//               action. Customizing or Creating your own custom landing page is really simple by using our UI components.
//             </SectionDescription>
//             <PreviewCards>
//               {Object.entries(landingPages).map(([pageName, page], index) => (
//                 <PreviewCardContainer key={index}>
//                   <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} target="_blank">
//                     <PreviewCardImageContainer>
//                       <PreviewCardImage
//                         transition={{ type: "tween" }}
//                         variants={previewImageAnimationVariants}
//                         $imageSrc={page.imageSrc}
//                       />
//                     </PreviewCardImageContainer>
//                     <PreviewButton>View Live Demo</PreviewButton>
//                   </PreviewCard>
//                 </PreviewCardContainer>
//               ))}
//             </PreviewCards>
//           </SectionContainer>
//           <SectionContainer>
//             <SectionHeading>Inner Pages</SectionHeading>
//             <SectionDescription>
//               We also provide {noOfInnerPages} additional inner pages for your various needs like a signup, login,
//               pricing, about us, contact, blog etc. To view them in action click the "View Live Demo" button.
//             </SectionDescription>
//             <PreviewCards>
//               {Object.entries(innerPages).map(([pageName, page], index) => (
//                 <PreviewCardContainer key={index}>
//                   <PreviewCard initial="rest" animate="rest" whileHover="hover" href={page.url} target="_blank">
//                     <PreviewCardImageContainer>
//                       <PreviewCardImage
//                         transition={{ type: "tween" }}
//                         variants={!page.scrollAnimationDisabled && previewImageAnimationVariants}
//                         $imageSrc={page.imageSrc}
//                       />
//                     </PreviewCardImageContainer>
//                     <PreviewButton>View Live Demo</PreviewButton>
//                   </PreviewCard>
//                 </PreviewCardContainer>
//               ))}
//             </PreviewCards>
//           </SectionContainer>

//           <SectionContainer id="componentDemos">
//             <SectionHeading>Component Blocks</SectionHeading>
//             <SectionDescription>
//               We also provide {noOfComponentBlocks} components along with the premade landing pages so you can create
//               your own landing page within minutes as you see fit. You can combine these components to create 1000s of
//               unique attractive web pages.
//               <span tw="block text-sm text-gray-500 mt-2">
//                 (Preview Panel below inspired by Tailwind UI)
//               </span>
//             </SectionDescription>
//             <BlocksRenderer blocks={Object.values(blocks)} />
//           </SectionContainer>
//         </Content2Xl>
//       </Container>
//     </AnimationRevealPage>
//   );
// };

// const BlocksRenderer = ({ blocks }) => {
//   const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0);

//   const updateLastVisibleBlockIndex = index => {
//     console.log("LAST WAS ", lastVisibleBlockIndex);
//     if (index > lastVisibleBlockIndex) setLastVisibleBlockIndex(index);
//   };

//   return (
//     <ComponentsContainer>
//       {blocks.map(
//         (block, index) =>
//           lastVisibleBlockIndex + 1 >= index && (
//             <Block key={index} components={block} notifyIsVisible={() => updateLastVisibleBlockIndex(index)} />
//           )
//       )}
//     </ComponentsContainer>
//   );
// };

// const Block = ({ notifyIsVisible, components }) => {
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) notifyIsVisible();
//   }, [inView, notifyIsVisible]);

//   const ResizeHandle = (
//     <ResizeHandleButton>
//       <HandleIcon tw="w-4 h-4 text-gray-600" />
//     </ResizeHandleButton>
//   );

//   const componentBlockRefs = {};

//   const updateComponentBlockIframeHeight = iframe => {
//     iframe.style.height = "auto";
//     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
//   };

//   return (
//     <div ref={ref} tw="mt-32">
//       <ComponentsType>{components.type}</ComponentsType>
//       <Components>
//         {Object.values(components.elements).map((component, componentIndex) => (
//           <Component key={componentIndex}>
//             <ComponentHeading>
//               <ComponentName>{component.name}</ComponentName>
//               <ComponentPreviewLink className="group" href={component.url} target="_blank">
//                 View Live Demo{" "}
//                 <ArrowRightIcon tw="transition duration-300 transform group-hover:translate-x-px ml-2 w-4 h-4" />
//               </ComponentPreviewLink>
//             </ComponentHeading>
//             <ComponentContent>
//               <ResizableBox
//                 minWidth={310}
//                 default={{
//                   width: "100%",
//                   height: "100%"
//                 }}
//                 bounds="parent"
//                 disableDragging={true}
//                 enableResizing={{ right: true }}
//                 resizeHandleComponent={{ right: ResizeHandle }}
//                 resizeHandleWrapperClass={`resizeHandleWrapper`}
//                 onResize={() => updateComponentBlockIframeHeight(componentBlockRefs[component.url])}
//               >
//                 <iframe
//                   src={component.url}
//                   title="Hero"
//                   width="100%"
//                   ref={ref => (componentBlockRefs[component.url] = ref)}
//                   onLoad={e => updateComponentBlockIframeHeight(e.target)}
//                 />
//               </ResizableBox>
//             </ComponentContent>
//           </Component>
//         ))}
//       </Components>
//     </div>
//   );
// };
