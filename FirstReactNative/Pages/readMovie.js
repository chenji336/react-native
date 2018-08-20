import React, {
    Component,
} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';

const MOCKED_MOVIES_DATA = [
    { title: '标题', year: '2015', posters: { thumbnail: 'http://i.imgur.com/UePbdph.jpg' } },
];

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';


export default class ReadMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
        };

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    data: this.state.data.concat(responseData.movies),
                    loaded: true
                });
            })
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
            />
        );
    }

    renderLoadingView() {
        return (
            <View>
                <Text>
                    正在加载电影数据.....
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: movie.item.posters.thumbnail }}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.item.title}</Text>
                    <Text style={styles.year}>{movie.item.year}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
