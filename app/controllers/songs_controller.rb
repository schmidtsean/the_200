class SongsController < ApplicationController
  
  before_action :set_artist
  before_action :set_song, only: [ :show, :edit, :update, :destroy ]
  
  
  def index
    @songs = @artist.songs
    render component: 'Songs', props: { artist: @artist, songs: @songs }
  end

  def show
    @song = Song.find(params[:id])
    render component: 'SongNew', props: { artist: @artist, song: @songs}
  end

  def new
    @song = @artist.songs.new
    render component: 'SongNew', props: { artist: @artist, song: @song }
  end

  def create
    @song = @artist.songs.new(song_params)
    if @song.save
      redirect_to artist_songs_path  (@artists)
    else
      render component: 'SongNew', props: { artist: @artist, song: @song }
    end
  end
  
  def edit
    render component: 'SongEdit', props: { artist: @artist, song: @song }
  end

  def update
    if @song.update(song_params)
      redirect_to artist_songs_path(@artist)
    else
      render component: 'SongEdit', props: { artist: @artist, song: @song }
    end
  end
  
  def destroy
    @song.destroy
    redirect_to artist_songs_path(@song)
  end


  private
  def song_params
    params.require(:song).permit(:name, :body)
  end

  def artist_params
    params.require(:artist).permit(:name, :body)
  end

  def set_artist
    @artist = Artist.find(params[:artist_id])
  end

  def set_song
    @song = @artist.songs.find(params[:id])
  end
end
