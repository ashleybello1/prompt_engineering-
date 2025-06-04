"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, List, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Music playlist data
const musicPlaylist = [
  {
    id: 1,
    title: "Bakery Ambience",
    artist: "Elfie's Bakery",
    genre: "ambient",
    duration: 180, // 3 minutes
  },
  {
    id: 2,
    title: "Smooth Afternoon",
    artist: "R&B Collective",
    genre: "r&b",
    duration: 240, // 4 minutes
  },
  {
    id: 3,
    title: "Urban Soul",
    artist: "The Rhythm Project",
    genre: "r&b",
    duration: 210, // 3.5 minutes
  },
  {
    id: 4,
    title: "Study Focus",
    artist: "Lo-Fi Beats",
    genre: "lofi",
    duration: 300, // 5 minutes
  },
  {
    id: 5,
    title: "Chill Vibes",
    artist: "Ambient Sounds",
    genre: "lofi",
    duration: 270, // 4.5 minutes
  },
]

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(50)
  const [currentTime, setCurrentTime] = useState(0)
  const [isMinimized, setIsMinimized] = useState(true)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false)
  const [isDemo, setIsDemo] = useState(true) // Demo mode since we don't have real audio files
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { toast } = useToast()

  const currentTrack = musicPlaylist[currentTrackIndex]
  const duration = currentTrack.duration

  // Simulate audio playback in demo mode
  useEffect(() => {
    if (isPlaying && isDemo) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            playNextTrack()
            return 0
          }
          return prev + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isDemo, duration])

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const togglePlay = () => {
    if (isDemo) {
      setIsPlaying(!isPlaying)
      if (!isPlaying) {
        toast({
          title: "Demo Mode",
          description: "This is a demo music player. Add real audio files to enable actual playback.",
        })
      }
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)

    if (newVolume === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const handleSeek = (value: number[]) => {
    const seekTime = value[0]
    setCurrentTime(seekTime)
  }

  const playPreviousTrack = () => {
    const newIndex = currentTrackIndex === 0 ? musicPlaylist.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(newIndex)
    setCurrentTime(0)

    if (isPlaying) {
      toast({
        title: "Previous Track",
        description: `Now playing: ${musicPlaylist[newIndex].title}`,
      })
    }
  }

  const playNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % musicPlaylist.length
    setCurrentTrackIndex(newIndex)
    setCurrentTime(0)

    if (isPlaying) {
      toast({
        title: "Next Track",
        description: `Now playing: ${musicPlaylist[newIndex].title}`,
      })
    }
  }

  const playSpecificTrack = (index: number) => {
    setCurrentTrackIndex(index)
    setCurrentTime(0)
    setIsPlaylistOpen(false)

    toast({
      title: "Track Selected",
      description: `Now playing: ${musicPlaylist[index].title}`,
    })
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const getProgress = () => {
    return duration > 0 ? (currentTime / duration) * 100 : 0
  }

  return (
    <div
      className={`fixed bottom-0 right-0 z-50 transition-all duration-300 ${
        isMinimized ? "w-16 h-16" : "w-full md:w-96"
      }`}
    >
      <div className="bg-white border border-cherry-mist shadow-lg rounded-t-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Music className="h-4 w-4 text-faded-petal" />
            {!isMinimized && (
              <>
                <h3 className="font-medium text-faded-petal truncate max-w-[150px] font-script">
                  {currentTrack.title}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {currentTrack.genre === "r&b" ? "R&B" : currentTrack.genre === "lofi" ? "Lo-Fi" : "Ambient"}
                </Badge>
              </>
            )}
          </div>
          <div className="flex items-center gap-1">
            {!isMinimized && (
              <Sheet open={isPlaylistOpen} onOpenChange={setIsPlaylistOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <List className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="font-script text-2xl">Music Playlist</SheetTitle>
                  </SheetHeader>
                  <div className="py-4">
                    <Tabs defaultValue="all">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="r&b">R&B</TabsTrigger>
                        <TabsTrigger value="lofi">Lo-Fi</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all" className="mt-4">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-1">
                            {musicPlaylist.map((track, index) => (
                              <TrackItem
                                key={track.id}
                                track={track}
                                isActive={index === currentTrackIndex}
                                onClick={() => playSpecificTrack(index)}
                              />
                            ))}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="r&b" className="mt-4">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-1">
                            {musicPlaylist
                              .filter((track) => track.genre === "r&b")
                              .map((track) => {
                                const index = musicPlaylist.findIndex((t) => t.id === track.id)
                                return (
                                  <TrackItem
                                    key={track.id}
                                    track={track}
                                    isActive={index === currentTrackIndex}
                                    onClick={() => playSpecificTrack(index)}
                                  />
                                )
                              })}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="lofi" className="mt-4">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-1">
                            {musicPlaylist
                              .filter((track) => track.genre === "lofi")
                              .map((track) => {
                                const index = musicPlaylist.findIndex((t) => t.id === track.id)
                                return (
                                  <TrackItem
                                    key={track.id}
                                    track={track}
                                    isActive={index === currentTrackIndex}
                                    onClick={() => playSpecificTrack(index)}
                                  />
                                )
                              })}
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </Tabs>
                  </div>
                  <SheetClose asChild>
                    <Button className="w-full bg-cherry-mist hover:bg-faded-petal text-white mt-4">Close</Button>
                  </SheetClose>
                </SheetContent>
              </Sheet>
            )}
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setIsMinimized(!isMinimized)}>
              {isMinimized ? "+" : "-"}
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <div className="text-xs text-gray-500 mb-2 font-script">{currentTrack.artist}</div>

            {isDemo && (
              <div className="text-xs text-cherry-mist mb-2 bg-ivory p-2 rounded">
                Demo Mode - Add real audio files to enable actual playback
              </div>
            )}

            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="relative">
                <Slider
                  value={[currentTime]}
                  min={0}
                  max={duration}
                  step={1}
                  onValueChange={handleSeek}
                  className="w-full"
                />
                {/* Progress indicator */}
                <div
                  className="absolute top-0 left-0 h-full bg-cherry-mist/20 rounded-full pointer-events-none"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-cherry-mist text-faded-petal hover:bg-ivory"
                  onClick={playPreviousTrack}
                >
                  <SkipBack className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-cherry-mist text-faded-petal hover:bg-ivory"
                  onClick={togglePlay}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 border-cherry-mist text-faded-petal hover:bg-ivory"
                  onClick={playNextTrack}
                >
                  <SkipForward className="h-4 w-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-500 hover:bg-ivory"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>

                <Slider
                  value={[isMuted ? 0 : volume]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="w-24"
                />
              </div>

              <div className="flex items-center text-xs text-gray-400">{isPlaying ? "Playing" : "Paused"}</div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Track item component for the playlist
function TrackItem({
  track,
  isActive,
  onClick,
}: {
  track: (typeof musicPlaylist)[0]
  isActive: boolean
  onClick: () => void
}) {
  return (
    <button
      className={`w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors ${
        isActive ? "bg-cherry-mist/10 text-faded-petal" : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        {isActive ? (
          <div className="h-8 w-8 rounded-full bg-cherry-mist flex items-center justify-center">
            <Music className="h-4 w-4 text-white" />
          </div>
        ) : (
          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
            <Music className="h-4 w-4 text-gray-500" />
          </div>
        )}
      </div>
      <div className="flex-grow min-w-0">
        <div className="font-medium truncate font-script">{track.title}</div>
        <div className="text-xs text-gray-500 truncate">{track.artist}</div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <Badge variant="outline" className="text-xs flex-shrink-0">
          {track.genre === "r&b" ? "R&B" : track.genre === "lofi" ? "Lo-Fi" : "Ambient"}
        </Badge>
        <span className="text-xs text-gray-400">
          {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, "0")}
        </span>
      </div>
    </button>
  )
}
