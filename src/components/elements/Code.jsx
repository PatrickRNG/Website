import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import styled from 'styled-components';
import { copyToClipboard } from '../../utils/copy';

const Wrapper = styled.div`
  position: relative;
`;

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 2rem 0;
  padding: 0.5rem;
  overflow-x: auto;
  border-radius: 3px;
  & * {
    font-family: 'Courier Prime', Courier, monospace;
  }

  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 1.5rem;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.1rem;
  top: 0.45rem;
  z-index: 2;
  border: 0;
  border-radius: 3px;
  margin: 0.25em 0.5em;
  opacity: 0.3;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    opacity: 0.5;
  }
`;

const Code = ({ codeString, language, ...props }) => {
  const handleCopy = () => copyToClipboard(codeString);

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <CopyCode onClick={handleCopy}>Copy</CopyCode>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </Wrapper>
      )}
    </Highlight>
  );
};

export default Code;
