import React from "react";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import styled from "styled-components";
import Text from "../Text/Text";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import { FooterProps } from "./types";
import { ThemeSwitcher } from "../ThemeSwitcher";
import LangSelector from "../LangSelector/LangSelector";
import CakePrice from "../CakePrice/CakePrice";
import { LogoWithTextIcon, ArrowForwardIcon } from "../Svg";
import { Button } from "../Button";
import { Colors } from "../..";

import { LinkProps } from "../Link/types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: underline;
    color: #00b8d9;
  }
`;

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  currentLang,
  langs,
  setLang,
  cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  return (
    <StyledFooter p={["30px 16px 0px 16px", null, "20px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          <StyledLink as="a" href="/" aria-label="Pancake home page">
            <LogoWithTextIcon isDark width="130px" />
          </StyledLink>
        </StyledIconMobileContainer>
        <Text fontSize="14px" color="backgroundAlt">
          pl8app token address : 0xb77178a0fdead814296eae631be8e8171c02592b
        </Text>
        {/* <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        > */}
          {/* {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    color={isHighlighted ? baseColors.warning : darkColors.text}
                    bold={false}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))} */}
        {/* </Flex> */}
        <StyledToolsContainer
          order={[1, null, 2]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          {/* <Flex order={[2, null, 1]} alignItems="center"> */}
            {/* <StyledSocialLinks order={[2]} /> */}
            {/* <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
              color={darkColors.textSubtle as keyof Colors}
              dropdownPosition="top-right"
            /> */}
          {/* </Flex> */}
          {/* <Flex order={[2, null, 1]} alignItems="center">
            <StyledSocialLinks order={[2]} />
          </Flex> */}
          {/* <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center"> */}
            {/* <Box mr="20px">
              <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} />
            </Box>
            <Button
              as="a"
              href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              scale="sm"
              endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}
            >
              {buyCakeLabel}
            </Button> */}
            <Box display={["none", null, "block"]}>
              <StyledLink as="a" href="/" aria-label="Pancake home page">
                <LogoWithTextIcon isDark width="160px" />
              </StyledLink>
            </Box>
            <Link
              href={'https://token.pl8app.co.uk/privacy-policy/'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              Privacy Policy
            </Link>
            <Link
              href={'https://token.pl8app.co.uk/contact-us/'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              Contact Us
            </Link>
            <Link
              href={'https://bscscan.com/token/0xb77178a0fdead814296eae631be8e8171c02592b'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              BSCScan
            </Link>
            <Link
              href={' https://github.com/pl8app'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              GitHub
            </Link>
            <Link
              href={'https://t.me/pl8apptoken'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              Telegram
            </Link>
            <Link
              href={'https://www.reddit.com/r/pl8apptoken/'}
              target="_blank"
              rel="noreferrer noopener"
              color={lightColors.backgroundAlt}
              bold={false}
            >
              Reddit
            </Link>
            {/* <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} /> */}
          {/* </Flex> */}
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
