/* eslint-disable */
import React from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Grid, Link, Divider, Container, Typography, IconButton, Stack } from '@material-ui/core';
// routes

const SOCIALS = [
  { name: 'Telegram', icon: 'bx:bxl-telegram', url: 'https://t.me/EverETHOfficial' },
  { name: 'Discord', icon: 'akar-icons:discord-fill', url: 'https://discord.gg/7fTrE99ebk' },
  { name: 'Facebook', icon: 'gg:facebook', url: 'https://www.facebook.com/EverETHofficial' },
  { name: 'Twitter', icon: 'akar-icons:twitter-fill', url: 'https://www.twitter.com/everethofficial' }
];

const LINKS = [
  {
    headline: 'EverETH',
    children: [
      { name: 'About us', href: '#' },
      { name: 'Contact us', href: '#' },
      { name: 'FAQs', href: '#' }
    ]
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@evereth.net', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' }
    ]
  }
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="lg" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <ScrollLink to="move_top" spy smooth>
              <Stack direction="row" sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
                <img src="/assets/images/eth.png" alt="logo" width="50" />
              </Stack>
            </ScrollLink>
          </Grid>
          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI
              ©, ready to be customized to your style.
            </Typography>

            <Stack
              spacing={1.5}
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {SOCIALS.map((social) => (
                <IconButton key={social.name} color="primary" sx={{ p: 1 }} target="_blank" href={social.url}>
                  <Icon icon={social.icon} width={16} height={16} />
                </IconButton>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => {
                const { headline, children } = list;
                return (
                  <Stack key={headline} spacing={2}>
                    <Typography component="p" variant="overline">
                      {headline}
                    </Typography>
                    {children.map((link) => (
                      <Link
                        to={link.href}
                        key={link.name}
                        color="inherit"
                        variant="body2"
                        component={RouterLink}
                        sx={{ display: 'block' }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          © 2021. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
