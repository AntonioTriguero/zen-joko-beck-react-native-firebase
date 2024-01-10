import { useState, useCallback } from "react";
import { Alert, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideosItem = ({
  videoId,
  forScreen,
}: {
  videoId: string;
  forScreen?: boolean;
}) => {
  // Youtube playing button logic:

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
    <View style={[styles.card, { marginVertical: forScreen ? 5 : 0 }]}>
      <YoutubePlayer
        height={100}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
        width={200}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={togglePlaying}>
          <Text style={{ color: "#000", fontSize: 12 }}>
            {playing ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eeeeee",
    padding: 20,
    alignItems: "center",
    maxWidth: 225,
    minWidth: 225,
    Height: 300,
    marginRight: 10,
  },
  button: {
    borderColor: "#000",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: "center",
    width: "50%",
    marginTop: 10,
  },
});

export default VideosItem;
