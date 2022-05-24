<?php
class Survey
{
    private ?string $firstName;
    private ?string $email;
    private ?string $activity;

    public function __construct(?string $email, ?string $firstName, ?string $activity) 
    {
        $this->email = $email;
        $this->firstName = $firstName;
        $this->activity = $activity;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }
    public function getFirstName(): ?string
    {
        return $this->firstName;
    }
    public function getActivity(): ?string
    {
        return $this->activity;
    }
}