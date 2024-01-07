import { useState, useCallback } from "react";
import {
  Button,
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideosItem = ({ videoId }: { videoId: string }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={100}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        width={200}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={togglePlaying}>
          <Text style={{ color: "#eeeeee" }}>{playing ? "pause" : "play"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // marginTop: -100,
  },
  button: {
    borderColor: "#eeeeee",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: "center",
    width: "50%",
    marginTop: 10,
  },
});

export default VideosItem;
