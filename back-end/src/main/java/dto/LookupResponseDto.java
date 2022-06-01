package dto;

public class LookupResponseDto {
    Boolean error;
    String response;

    public LookupResponseDto(Boolean error, String response){
        this.error = error;
        this.response = response;
    }
}
