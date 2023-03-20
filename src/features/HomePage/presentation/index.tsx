import { Outlet } from 'react-router-dom';
// domain
// state
// shared components
import { PageTitle } from '@shared/components/PageTitle';
// error page
// components
import { Header } from '@shared/components/Header';
// styles
import { usePageTitle } from '@shared/components/PageTitle/state/index';
import { TopNavBar } from '@shared/components/TopNavBar';

import * as S from './styles';
import { useEffect } from 'react';
import { setupFirebase } from '../../../core/services/firebase';

export function Home() {
  const { title, pageTitleElement } = usePageTitle();
useEffect(() => {
  setupFirebase();
}, [])
  return (
    <S.Wrapper>
      <Header companyName="Memorias" />
      <PageTitle title={title}>{pageTitleElement} </PageTitle>
      <S.Main>
        <S.Content>
          <Outlet />
        </S.Content>
        {/* <PageTitle title="Eu serei um footer" /> */}
      </S.Main>
    </S.Wrapper>
  );
}
