// import { VideosEdit } from "~/videoContent.tsx/editVideos";
import { VideosEdit, VideosMotion } from "~/videoContent.tsx/videoArrays";
import ContentContainer from "../design/contentContainer";
import VideoCarousel from "../design/videoCarousel";
import VideoCard from "../design/videoCard";
import { VStack } from "@chakra-ui/react";
import SectionHeading from "../design/sectionHeading";

export default function PageTwo() {
  return (
    <div className="snapScrollPage" id="pageTwo">
      <ContentContainer>
        <VStack
          w="100%"
          h="100%"
          height="80vh"
          spacing={{ base: "0px", md: "15px", lg: "20px" }}
        >
          <VStack w="100%" h="100%" spacing={1}>
            <SectionHeading>- Motion Graphics -</SectionHeading>
            <VideoCarousel>
              {VideosMotion.map((video, index) => (
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
            <SectionHeading>- Edit -</SectionHeading>
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
    </div>
  );
}
