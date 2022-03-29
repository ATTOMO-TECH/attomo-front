// eslint-disable-next-line no-use-before-define
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Blogstyles } from './style';
import Title from '../Text/title';
import IconAnimate from '../button/icon';
import Subtext from '../Text/subText';

interface Props {
  dataBlog: any;
}

export default function BlockBlog({ dataBlog }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        straggerchildren: 1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: '20%',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      {React.Children.toArray(
        dataBlog.map((data: any) => (
          <motion.div
            className="children"
            variants={variants}
            initial="hidden"
            animate="show">
            <motion.div variants={item}>
              <Blogstyles.Article>
                <Blogstyles.BlockImg>
                  {data.attributes?.coverImage?.data?.attributes?.url ? (
                    <img
                      src={data.attributes.coverImage.data.attributes?.url}
                      width={900}
                      height={700}
                      alt={data.attributes.name}
                    />
                  ) : null}
                </Blogstyles.BlockImg>
                <Blogstyles.BlockText>
                  <Title size="text-sm leading-relaxed font-PrimarySerif ">
                    {data.attributes.blog_tags.data[0].attributes.name}
                  </Title>
                  <Title size="text-xl lg:text-3xl pr-12 leading-loose pt-4">
                    {data.attributes.title}
                  </Title>
                  <Subtext size=" md:text-lg lg:text-base pr-12 pt-4 leading-relaxed lg:text-left font-Secundary">
                    {data.attributes.title}
                  </Subtext>

                  <Blogstyles.SubText />
                  <Link href={`/ATTOMOTrends/${data.id}`}>
                    <div className="h-12">
                      <IconAnimate text="Leer" mode />
                    </div>
                  </Link>
                </Blogstyles.BlockText>
              </Blogstyles.Article>
            </motion.div>
          </motion.div>
        )),
      )}
    </>
  );
}
