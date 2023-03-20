import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// assets
import logoHeader from '@assets/png/hsbc/logo_hsbc.png';
import { MenuItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Translator } from '../../../i18n/translator';
import { MenuSelect } from '../MenuSelect';
import { Alert } from '../../../assets/svg/hsbc_icons/alert';
import { Help } from '../../../assets/svg/hsbc_icons/help';
import { theme } from '../../styles/customTheme';
import { HelpActive } from '../../../assets/svg/hsbc_icons/helpActive';
import { useHomeStore } from '../../../features/HomePage/presentation/state/home';
// styles
import * as S from './styles';

export interface HeaderProps {
  companyName: string;
}

export function Header({ companyName }: HeaderProps) {
  const navigate = useNavigate();
  const english = Translator('english');
  const portuguese = Translator('portuguese');
  const spanish = Translator('spanish');
  const labelButton = Translator('currentLanguage');
  const setLabelButton = useHomeStore((state) => state.setLabelButton);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorHelp, setAnchorHelp] = React.useState<null | HTMLElement>(null);
  const [btnClick, setBtnClick] = React.useState<boolean>(false);

  const { i18n } = useTranslation(['home']);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickAnchorHelp = (event: React.MouseEvent<HTMLElement>) => {
    if (btnClick === false) {
      setAnchorHelp(event.currentTarget);
      setBtnClick(true);
    } else if (btnClick === true) {
      setAnchorHelp(null);
      setBtnClick(false);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLanguageChange = (language: string) => {
    return i18n.changeLanguage(language); // change the language
  };

  useEffect(() => {
    // setLabelButton(labelButton);
    switch (labelButton) {
      case english: {
        setLabelButton(english);
        break;
      }
      case portuguese: {
        setLabelButton(portuguese);
        break;
      }
      case spanish: {
        setLabelButton(spanish);
        break;
      }
      default: {
        setLabelButton(labelButton);
        break;
      }
    }
  }, [labelButton, english, portuguese, spanish, setLabelButton]);

  const handleClickItem = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget.childNodes[0].nodeValue !== '') {
      const childString = event.currentTarget.childNodes[0].nodeValue;
      if (childString === english) {
        onClickLanguageChange('en');
      } else if (childString === portuguese) {
        onClickLanguageChange('pt');
      } else if (childString === spanish) {
        onClickLanguageChange('es');
      }
    }
    setAnchorEl(event.currentTarget);
    handleClose();
  };

  return (
    <S.Header id="header">
      <S.BtnLogo onClick={() => navigate('/')}>
        <S.Logo src={logoHeader} id="header-logo" />
        <S.Vdivider orientation="vertical" flexItem />
        <S.CompanyName> {companyName}</S.CompanyName>
      </S.BtnLogo>
      <S.ActionsContainer>
        {/* <S.Vdivider orientation="vertical" flexItem />
        <S.StyledBadge badgeContent="4" variant="dot">
          <Alert
            width="1.8rem"
            height="1.8rem"
            color={theme.color.hsbc.content.on_dark_01}
            fill={theme.color.hsbc.content.on_dark_01}
          />
        </S.StyledBadge> */}
        <S.Vdivider orientation="vertical" flexItem />
        <MenuSelect
          anchorEl={anchorHelp}
          onClick={handleClickAnchorHelp}
          variant="secondary"
          iconClosed={<Help />}
          iconOpen={<HelpActive />}
        />
        <S.Vdivider orientation="vertical" flexItem />
        <MenuSelect
          anchorEl={anchorEl}
          labelButton={labelButton}
          onClick={handleClick}
          onClose={handleClose}
          variant="tertiary"
        >
          <MenuItem onClick={handleClickItem} disableRipple>
            {english}
          </MenuItem>
          <MenuItem onClick={handleClickItem} disableRipple>
            {portuguese}
          </MenuItem>
          <MenuItem onClick={handleClickItem} disableRipple>
            {spanish}
          </MenuItem>
        </MenuSelect>
        <S.Vdivider orientation="vertical" flexItem />
        <Typography
          fontWeight={theme.typography.m2.body.body1.fontWeight}
          fontFamily={theme.typography.m2.body.body1.fontFamily}
          fontSize={theme.typography.m2.body.body1.fontSize}
          color={theme.color.hsbc.content.on_dark_01}
          width="max-content"
        >
          Mateus Coutinho
        </Typography>
      </S.ActionsContainer>
    </S.Header>
  );
}
