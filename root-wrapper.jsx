import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/elements/Code';

const List = styled.ul`
  margin-bottom: 2.5rem;
  font-size: 1rem;
  
  li {
    font-family: 'PT Serif', serif;
    list-style: disc !important;
    margin: 1.3rem 0 0 1.5rem
  }
`;

const OrderedList = styled.ol`
  margin-bottom: 2.5rem;
  font-size: 1rem;
  
  li {
    font-family: 'PT Serif', serif;
    list-style: decimal !important;
    margin: 1.3rem 0 0 1.5rem
  }
`;

const Table = styled.table`
  border: 2px solid #333;
  border-collapse: collapse;
  margin-bottom: 2.5rem;

  > * {
    font-family: 'Lato', 'Open Sans', sans-serif !important;
  }

  td, th {
    padding: 10px;
    border: 2px solid #333;
    padding: 8px
  }

  thead {
    background-color: #333;
  }
`;

const CodeElement = (props) => <code {...props} style={{ backgroundColor: '#2b2b2b', padding: '0 0.4rem 0.2rem 0.4rem', fontSize: '1.2rem' }} />
const createLocalLink = (text) => String(text).toLowerCase().replace(/\s/g, '-');

const components = {
  h1: ({ children }) => <h1 id={createLocalLink(children)} style={{ fontSize: '2rem', marginBottom: '1.8rem' }}>{children}</h1>,
  h2: ({ children }) => <h2 id={createLocalLink(children)} style={{ fontSize: '1.8rem', margin: '1.25rem 0 1.1rem 0' }}>{children}</h2>,
  h3: ({ children }) => <h3 id={createLocalLink(children)} style={{ fontSize: '1.3rem', marginBottom: '1.1rem' }}>{children}</h3>,
  p: ({ children }) => <p style={{marginBottom: '2.5rem', fontSize: '1rem', lineHeight: '30px', fontFamily: 'PT Serif, serif'}}>{children}</p>,
  img: (props) => <img {...props} alt={props.alt} />,
  ol: ({ children }) => <OrderedList>{children}</OrderedList>,
  ul: ({ children }) => <List>{children}</List>,
  strong: ({ children }) => <b style={{fontWeight: '600', fontFamily: 'PT Serif, serif'}}>{children}</b>,
  em: ({ children }) => <em style={{fontFamily: 'PT Serif, serif'}}>{children}</em>,
  hr: () => <hr style={{width: '60px', border: '1px solid #2b2b2b', margin: '3rem auto'}} />,
  'p.inlineCode': (props) => <CodeElement {...props }/>,
  'li.inlineCode': (props) => <CodeElement {...props }/>,
  table: (props) => <Table {...props} >{props.children}</Table>,
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
