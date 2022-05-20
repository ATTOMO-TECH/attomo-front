import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { Blogstyles } from './style';
import Title from '../Text/title';
import IconAnimate from '../button/icon';
import Subtext from '../Text/subText';

interface Props {
  dataBlog: any;
}

export default function BlockBlog({ dataBlog }: Props) {
  const router = useRouter();
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
  const callback = (id: any) => {
    router.push(`/ATTOMOTrends/${id}`);
  };

  const bind = useLongPress((id: any) => callback(id.target.id), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 200,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  return (
    <>
      {dataBlog.map((data: any) => (
        <motion.div
          className="children pb-8"
          variants={variants}
          key={data.id}
          initial="hidden"
          animate="show">
          <motion.div variants={item}>
            <Blogstyles.Article>
              <Link href={`/ATTOMOTrends/${data.id}`}>
                <Blogstyles.BlockImg {...bind()}>
                  {data.attributes?.coverImage?.data?.attributes?.url ? (
                    <img
                      src={data.attributes.coverImage.data.attributes?.url}
                      width={900}
                      height={700}
                      alt={data.attributes.name}
                      id={`${data.id}`}
                    />
                  ) : null}
                </Blogstyles.BlockImg>
              </Link>
              <Blogstyles.BlockText>
                <Subtext size="text-sm leading-relaxed  ">
                  {data.attributes.blog_tags.data[0].attributes.name}
                </Subtext>
                <Title size="text-xl lg:text-3xl pr-12 leading-loose pt-4">
                  {data.attributes.title}
                </Title>
                <Subtext size="pr-12 pt-4 text-sm leading-relaxed ">
                  {data.attributes.title}
                </Subtext>

                <Blogstyles.SubText />
                <Link href={`/ATTOMOTrends/${data.id}`}>
                  <div
                    onTouchStart={() => router.push(`/ATTOMOTrends/${data.id}`)}
                    className="h-12 w-2/6 relative">
                    <IconAnimate text="Leer" mode />
                  </div>
                </Link>
              </Blogstyles.BlockText>
            </Blogstyles.Article>
          </motion.div>
        </motion.div>
      ))}
    </>
  );
}
