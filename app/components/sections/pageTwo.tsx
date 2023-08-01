// import { VideosEdit } from "~/videoContent.tsx/editVideos";
import { VideosEdit } from "~/videoContent.tsx/editVideos";
import ContentContainer from "../design/contentContainer";
import { PageContainer } from "../design/pageContainer";
import VideoCarousel from "../design/videoCarousel";
import VideoCard from "../design/videoCard";
import { VStack } from "@chakra-ui/react";
import SectionHeading from "../design/sectionHeading";

export default function PageTwo() {
  return (
    <PageContainer>
      <ContentContainer>
        <VStack
          w="100%"
          h="100%"
          height="80vh"
          spacing={{ base: "0px", md: "15px", lg: "20px" }}
        >
          <VStack w="100%" h="100%" spacing={1}>
            <SectionHeading>- EDIT -</SectionHeading>
            <VideoCarousel>
              {VideosEdit.map((video, index) => (
                <VideoCard
                  key={video.index}
                  title={video.title}
                  info={video.info}
                  videoId={video.videoId}
                  thumbnail={video.thumbnail}
                />
              ))}
            </VideoCarousel>
          </VStack>
          <VStack w="100%" h="100%" spacing={1}>
            <SectionHeading>- MOTION GRAPHICS -</SectionHeading>
            <VideoCarousel>
              {VideosEdit.map((video, index) => (
                <VideoCard
                  key={video.index}
                  title={video.title}
                  info={video.info}
                  videoId={video.videoId}
                  thumbnail={video.thumbnail}
                />
              ))}
            </VideoCarousel>
          </VStack>
        </VStack>
      </ContentContainer>
    </PageContainer>
  );
}
