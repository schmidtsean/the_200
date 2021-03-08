class ArtistsController < ApplicationController
  before_action :set_playlist
  before_action :set_artist, only: [ :show, :edit, :update, :destroy ]
  
  
  def index
    @artists = @playlist.artists
    render component: 'Artists', props: { playlist: @playlist, artists: @artists }
  end

  def show
    render component: 'Aritist', props: { playlist: @playlist, artist: @artist}
  end

  def new
    @artist = @playlist.artists.new
    render component: 'ArtistNew', props: { playlist: @playlist, artist: @artist }
  end

  def create
    @artist = @playlist.artists.new(artist_params)
    if @artist.save
      redirect_to playlist_artists_path(@playlist)
    else
      render component: 'ArtistNew', props: { playlist: @playlist, artist: @artist}
    end
  end
  def edit
    render component: 'ArtistEdit', props: { playlist: @playlist, artist: @artist}
  end

  def update
    if @artist.update(artist_params)
      redirect_to playlist_artists_path(@playlist)
    else
      render component: 'ArtistEdit', props: { playlist: @playlist, artist: @artist }
    end
  end
  def destroy
    @artist.destroy
    redirect_to playlist_artists_path(@playlist)
  end

  private
  def artist_params
    params.require(:artist).permit(:name, :body)
  end

  def set_playlist
    @playlist = Playlist.find(params[:playlist_id])
  end

  def set_artist
    @artist = @playlist.artists.find(params[:id])
  end
end
