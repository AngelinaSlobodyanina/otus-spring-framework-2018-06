package ru.otus.spring.sokolovsky.hw11.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "authors")
public class Author {
    @Getter
    @Id
    private String id;

    @Getter
    @Setter
    @Indexed
    private String name;

    public Author(String name) {
        this.name = name;
    }
}
