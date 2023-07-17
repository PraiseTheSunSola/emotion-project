import styled from "styled-components";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  color: black;
`;

const H = styled.h2`
  display: block;
  margin-left: 10px;
`;
const P = styled.p`
  margin: 5px 0px 0px 10px;
  display: inline-block;
`;

export function Control() {
  return (
    <>
      <Page>
        <Title>감정을 관리하는법</Title>

        <H>
          감정 관리는 감정을 이해하고 적절하게 표현하며, 긍정적인 감정을
          촉진하고 부정적인 감정을 조절하는 것을 의미합니다. <br />
          감정 관리는 개인의 정신적 건강과 삶의 질을 향상시키는 데에 매우 중요한
          역할을 합니다. <br />
          감정 관리를 효과적으로 수행하기 위해서는 다음과 같은 요소들을 고려해야
          합니다
        </H>
        <br />
        <H>감정의 인식 (Emotional Awareness)</H>
        <P>
          감정 관리의 첫 번째 단계는 자신의 감정을 인식하는 것입니다. 어떤
          상황에서 어떤 감정을 느끼고 있는지 인식하고 인지하는 능력을 기르는
          것이 중요합니다.
        </P>
      </Page>
    </>
  );
}
